def sum_of_array(*numbers):
    sum = 0

    for i in numbers:
        sum += i

    return sum

print(sum_of_array(43, 43, 343,43, 41))