import heapq
from collections import defaultdict
from typing import List

class Twitter:

    def __init__(self):
        self.time = 0
        self.tweets = defaultdict(list)
        self.following = defaultdict(set)

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets[userId].append((self.time, tweetId))
        self.time += 1

    def getNewsFeed(self, userId: int) -> List[int]:
        candidate_users = {userId} | self.following[userId]
        heap = []

        for u in candidate_users:
            lst = self.tweets[u]
            if lst:
                idx = len(lst) - 1
                t, tid = lst[idx]
                heapq.heappush(heap, (-t, tid, u, idx))

        result = []
        while heap and len(result) < 10:
            neg_t, tid, u, idx = heapq.heappop(heap)
            result.append(tid)
            if idx > 0:
                nt, ntid = self.tweets[u][idx - 1]
                heapq.heappush(heap, (-nt, ntid, u, idx - 1))

        return result

    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId != followeeId:
            self.following[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        self.following[followerId].discard(followeeId)