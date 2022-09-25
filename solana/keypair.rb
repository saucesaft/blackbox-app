require_relative "base58"

def bytes_to_base58(bytes)
  hex = bytes.pack("C*").unpack("H*").first
  Base58.encode(hex)
end

keypair_bytes = [122,107,209,78,126,12,88,121,35,234,245,94,114,217,154,251,120,84,216,55,72,233,105,204,45,78,77,60,132,154,126,111,100,30,59,254,131,234,23,139,116,37,231,170,207,125,152,136,132,71,86,51,164,34,84,22,232,225,216,150,21,43,216,221]

private_key_bytes = keypair_bytes[0, 32]
public_key_bytes = keypair_bytes[32..-1]

puts "Keypair:", bytes_to_base58(keypair_bytes)
puts "\nPublic Key:", bytes_to_base58(public_key_bytes)
puts "\nPrivate Key:", bytes_to_base58(private_key_bytes)
