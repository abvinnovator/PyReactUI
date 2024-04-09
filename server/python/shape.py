import sys

import numpy as np

if __name__ == "__main__":
   
    array_str = sys.argv[1]
  
    array = np.array(eval(array_str))
    
    shape = array.shape
   
    print(','.join(str(dim) for dim in shape))