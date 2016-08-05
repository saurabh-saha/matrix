class Matrix(object):
    out=""
    def __init__(self,matrix,row,col):
        self.matrix=matrix
        self.n=row
        self.m=col

    def spiral(self):
        """matrix nxm"""
        #import pdb;pdb.set_trace()
        row_c,col_c=0,0
        matrix=self.matrix
        n=self.n
        m=self.m
        while (row_c<n and col_c<m):
            for i in range(col_c,m):
                self.out+=str(matrix[row_c][i])+" "
            row_c+=1

            for i in range(row_c,n):
                self.out+=str(matrix[i][m-1])+" " 
            m-=1

            if row_c<n:
                for i in range(m-1,col_c-1,-1):
                    self.out+=str(matrix[n-1][i])+" "
                n-=1

            if col_c<m:
                for i in range(n-1,row_c-1,-1):
                    self.out+=str(matrix[i][col_c])+" "
                col_c+=1