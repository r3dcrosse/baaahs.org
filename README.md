# BAAAHS website

Dependencies::::::
1) node: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

To run site:
```
git clone [URL OF THIS REPO]
cd baaahs.org
npm install
npm run build
npm start
```

Navigate to [http://localhost:1337](http://localhost:1337) to view this site locally.

BAAAHS Asset Manager (aka assman) API

routes:

get '/' do
  send_file public_html.join('index.html')

get '/a/:tag' do

get '/assman/assets/:tag' do

get '/assman/assets' do

post '/assman/assets/:tag'

put '/assman/assets/:tag/scans'

get '/assman/assets/:tag/scans' do

get '/assman/users' do

put '/assman/users' do

get '/assman/events' do

put '/assman/events' do
