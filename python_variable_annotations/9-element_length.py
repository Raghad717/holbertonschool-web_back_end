#!/usr/bin/env python3
"""Module that annotates a function working with iterables."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list of tuples containing elements and their lengths."""
    return [(i, len(i)) for i in lst]
