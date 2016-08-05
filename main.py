from matrix import Matrix

def createMatrix(l,col):
    m=[]
    for i in range(len(l)):
        n=[]
        for j in range(1,col):
            n.append(l[i]+str(j))
        m.append(n)
    return m,len(l),col-1

m=createMatrix(['a','b','c','d'],5)
s=Matrix(m[0],m[1],m[2])
s.spiral()
print(s.out)