#!/usr/bin/env python3
"""Module that measures the average runtime of wait_n."""

import time
import asyncio

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Return average time per wait_n execution."""
    start = time.time()

    asyncio.run(wait_n(n, max_delay))

    end = time.time()

    return (end - start) / n
