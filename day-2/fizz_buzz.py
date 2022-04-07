def fizz_buzz(n):
    fizz_buzz_list = []

    for i in range(1, n + 1):
        string = f"{'Fizz' if i % 3 == 0 else ''}{'Buzz' if i % 5 == 0 else ''}"

        fizz_buzz_list.append(str(string or i))

    return ' '.join(fizz_buzz_list)

print(fizz_buzz(100))