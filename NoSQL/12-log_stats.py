#!/usr/bin/env python3
"""Provide statistics about Nginx logs stored in MongoDB."""

from pymongo import MongoClient


def main():
    """Print Nginx request statistics."""
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx = client.logs.nginx

    total = nginx.count_documents({})
    print(f"{total} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = nginx.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    status = nginx.count_documents({"method": "GET", "path": "/status"})
    print(f"{status} status check")


if __name__ == "__main__":
    main()
