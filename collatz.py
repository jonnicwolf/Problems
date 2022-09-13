def collatz (n):
    result = []
    result.append(n)
    while n!=1:
        if n%2 == 0:
            result.append(n/2)
            n = n/2
        else:
            result.append(n*3+1)
            n = n*3+1
    print(len(result))
    return len(result)
# collatz(20)
collatz(73567465519280238573)
