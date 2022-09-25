module Base58

  class InvalidCharacterError < RuntimeError; end

  ALPHABET =
    %w(
      1 2 3 4 5 6 7 8 9 
      a b c d e f g h i 
      j k m n o p q r s 
      t u v w x y z A B 
      C D E F G H J K L 
      M N P Q R S T U V 
      W X Y Z
    )

  BASE = ALPHABET.length
    
  def self.encode(n)
    return ALPHABET[0] if n == 0
 
    buffer = String.new
 
    while n > 0
      remainder = n % BASE
      n = n / BASE
      buffer = ALPHABET[remainder] + buffer
    end

    return buffer
  end

  def self.decode(string)
    n = 0
    power = string.length - 1

    string.each_char do |c|
      position = ALPHABET.index(c)
      raise InvalidCharacterError if position.nil?
      n += position * (BASE ** power)
      power -= 1
    end

    return n
  end

end