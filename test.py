# str = '1633784847171919318488438919491111838381'
# arrStr = list(str)
# arrStr.reverse()
# result = ''.join(arrStr)
# print(result)

import random 
# data = [
#     ['Coca' , 'Pepsi'],
#     ['Sách' , 'Phim'],
#     ['Hồ bơi' , 'biển'],
#     ['Chó' , 'mèo'],
#     ['Chuối' , 'Dưa hấu'],
#     ['Mưa' , 'Nắng'],
#     ['ít người' , 'Đám đông'],
#     ['xanh' , 'Đò'],
#     ['đơn giản' , 'Phức tạp'],
# ]

# result = [ i[random.randint(0,1)] for i in data]
# str = ','.join(result)
# print(str)


def customRandom(data):
    result = data[random.randint(0 , len(data) - 1)]
    return result


print(customRandom([1,26,7,8]))