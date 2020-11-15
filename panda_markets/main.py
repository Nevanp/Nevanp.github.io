# Nevan Parsley NRP211 11274655
# Dr. Jeffery Long


import numpy as np

site0 =[2, 5, 5, 6]
site1 = [3 ,3 ,5 ,7 ,7 ,9]
def blockStack(site):
    print(site)
    if site == []:
        return []
    elif len(site) == 1:
        return [site[0]]
    else:
        return sorted([site[0]] + blockStack(site[1:]) + [sum(site)] + blockStack(site[:-1]))

print(blockStack(site0))