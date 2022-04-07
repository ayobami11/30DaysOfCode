def fizz_buzz_lists(list):
    nested_fizz_buzz_list = []

    def make_fizz_buzz_list(n):
        fizz_buzz_list = []

        for i in range(1, n + 1):
            string = f"{'Fizz' if i % 3 == 0 else ''}{'Buzz' if i % 5 == 0 else ''}"

            fizz_buzz_list.append(str(string or i))

        return fizz_buzz_list

    for number in list:
        nested_fizz_buzz_list.append(make_fizz_buzz_list(number))

    return nested_fizz_buzz_list


print(fizz_buzz_lists([10, 3, 6, 4, 1]))