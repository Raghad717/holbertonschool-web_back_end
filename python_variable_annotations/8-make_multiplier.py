#!/usr/bin/env python3
"""Module that contains a function returning a multiplier function."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by a given multiplier."""

    def multiply(n: float) -> float:
        """Multiply n by multiplier."""
        return n * multiplier

    return multiply
