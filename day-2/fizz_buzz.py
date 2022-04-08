def fizz_buzz(n):
    fizz_buzz_string = ''

    for i in range(1, n + 1):
        string = f"{'Fizz' if i % 3 == 0 else ''}{'Buzz' if i % 5 == 0 else ''}"

        fizz_buzz_string += f" {string or str(i)}"

    return fizz_buzz_string.strip()

print(fizz_buzz(100))