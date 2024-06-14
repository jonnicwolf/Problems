def decode_message(file_path):
  with open(file_path, 'r') as file:
    lines = file.readlines()

  data = []
  for line in lines:
    number, word = line.split()
    data.append((int(number),word))

  data.sort()

  pyramid = []
  level = 1
  index = 0
  while index < len(data):
    pyramid.append(data[index:index + level])
    index += level
    level += 1

  decoded_words = [level[-1][1] for level in pyramid]
  decoded_message = ' '.join(decoded_words)

  return decoded_message

#print(decode_message('coding_qual_input.txt'))
print(decode_message('test.txt'))

