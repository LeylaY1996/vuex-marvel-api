export const secret_key = "3182231db029db605282fd9f21a15710995095e4";
export const public_key = "9dfd285ec0077b1dd5d1de06d42c2fac";
import hashlib;

m_hash = hashlib.md5();
ts_str_byte = bytes(ts_str, 'utf-8');
secret_key_byte = bytes(secret_key, 'utf-8');
public_key_byte = bytes(public_key, 'utf-8');
m_hash.update(ts_str_byte + secret_key_byte + public_key_byte);
m_hash_str = str(m_hash.digest());

payload = { 'ts': ts_str, 'apikey': 'a3c785ecc50aa21b134fca1391903926', 'hash': m_hash_str };


r = requests.get('https://gateway.marvel.com:443/v1/public/characters', params = payload);


print(r.url);
print(r.json());