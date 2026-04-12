#!/usr/bin/env python3
"""Module that contains a function to create a key-value tuple."""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple with a string and the square of a number."""
    return (k, float(v * v))
