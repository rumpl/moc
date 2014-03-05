class Matrix:
    def __init__(self, *args):
        self.rows = args

    def __getitem__(self, idx):
        return self.rows[idx]

    def __mul__(self, m):
        ret = [0 for i in self.rows]
        i = 0

        for idx, row in enumerate(self.rows):
            i = i + 1
            for col, val in enumerate(row):
                ret[idx] = ret[idx] + row[col] * m[col]
        return ret

class Hamming:
    def __init__(self, message):
        self.g = Matrix([1,1,0,1],[1,0,1,1],[1,0,0,0],[0,1,1,1],[0,1,0,0],[0,0,1,0],[0,0,0,1])
        self.h = Matrix([1,0,1,0,1,0,1],[0,1,1,0,0,1,1],[0,0,0,1,1,1,1])
        self.message = message

    def encode(self):
        return self.mod(self.g * self.message, 2)

    def decode(self):
        z = self.mod(self.h * self.message, 2)
        idx = sum(x*2**i for i, x in enumerate(z))
        print idx


    def mod(self, message, mod):
        for n, val in enumerate(message):
            message[n] = val % mod
        return message

m = Hamming([1,1,1,0])

encoded = m.encode()
print(encoded)
#encoded[0] = 1

dec = Hamming(encoded)
dec.decode()
