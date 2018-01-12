''' Eaxample of a function that takes arbitrary length arguments
    *args accept the list of all positional arguments
    **kwargs accepts all the keyword arguments
'''


def a_function_that_takes_arbitary_number_of_arguments(*args, **kwargs):
    for count, element in enumerate(args):
        print("{} {}".format(count, element))

    print()

    for key, value in kwargs.items():
        print("kwarg[{0}]={1}".format(key, value))

if __name__ == "__main__":
    positional_argument_list =['value1', 'value2', 'value3']

    a_function_that_takes_arbitary_number_of_arguments(
        positional_argument_list[0], positional_argument_list[1], positional_argument_list[2],
        key1='value1', key2='value2', key3= 'value3'
    )