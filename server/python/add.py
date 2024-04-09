import numpy as np
import sys
def sum(a, b):
    return np.add(a, b)

if __name__ == "__main__":
    num1 = float(sys.argv[1])
    num2 = float(sys.argv[2])
    res = sum(num1, num2)
    print(res)
