#!/usr/bin/env python3
"""Simple helper function for pagination."""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return a tuple of start and end indexes for pagination.

    Args:
        page (int): 1-indexed page number.
        page_size (int): Number of items per page.

    Returns:
        Tuple[int, int]: A tuple (start_index, end_index).
    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
