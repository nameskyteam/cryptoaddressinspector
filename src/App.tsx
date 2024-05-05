import { useState } from 'react'
import './App.css'
import categorizeChar from './categorizer';

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const addressInQuery = searchParams.get('address') ?? 'r00t.near';
  const [address, setAddress] = useState(addressInQuery);

  const addressCharacters = address.split('').map((char, index) => {
    const categoryName = categorizeChar(char)
    return {
      char,
      index,
      categoryName
    }
  });

  const [hoverIndex, setHoverIndex] = useState(-1)

  return (
    <main className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 min-h-screen">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Crypto Address Inspector</h1>
          <p className="text-gray-500 dark:text-gray-400">Verify the type of crypto address before sending assets</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
          <div className="space-y-2">
            <label className="font-medium" htmlFor="address">
              Crypto Address
            </label>
            <input
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
              id="address"
              placeholder="Enter a crypto address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
            Inspect
          </button>
          <div className="space-y-2">
            <div className='font-mono flex items-center justify-center font-bold text-xl'>
              {
                addressCharacters.map(({ char, index }) => {
                  // if hoverIndex is not -1 and the index is equal to the hoverIndex, add a border around the character
                  const className = hoverIndex !== -1 && hoverIndex === index ? 'px-1 border border-blue-500 bg-blue-500 rounded-md text-white' : ''
                  return <span className={className} key={index}>{char}</span>
                })}
            </div>
            <div className="grid grid-cols-1 gap-2">
              {
                addressCharacters.map(({ char, index, categoryName }) => {
                  const indicatorClassName = (() => {
                    switch (categoryName) {
                      case 'number':
                        return 'bg-purple-500 w-5 h-5 rounded-full text-white flex items-center justify-center text-xs font-medium font-mono';
                      case 'uppercase alphabet':
                        return 'bg-orange-500 w-5 h-5 rounded-full text-white flex items-center justify-center text-xs font-medium font-mono';
                      case 'lowercase alphabet':
                        return 'bg-green-500 w-5 h-5 rounded-full text-white flex items-center justify-center text-xs font-medium font-mono';
                      case 'whitespace':
                        return 'bg-gray-500 w-5 h-5 rounded-full text-white flex items-center justify-center text-xs font-medium font-mono';
                      case 'unknown':
                        return 'bg-gray-500 w-5 h-5 rounded-full text-white flex items-center justify-center text-xs font-medium font-mono';
                      case 'punctuation':
                        return 'bg-yellow-500 w-5 h-5 rounded-full text-white flex items-center justify-center text-xs font-medium font-mono';
                      default:
                        return 'bg-gray-500 w-5 h-5 rounded-full text-white flex items-center justify-center text-xs font-medium font-mono';
                    }
                  })();
                  return (
                    <div key={index} className="bg-gray-100 hover:bg-gray-300 dark:bg-gray-700 rounded-md p-2 transition-colors cursor-pointer"
                      onMouseEnter={() => setHoverIndex(index)}
                    >
                      <div className="flex items-center space-x-2">
                        <div className={indicatorClassName}>
                          {char}
                        </div>
                        <div>{categoryName}</div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              The address {address} is composed of the following character types: {addressCharacters.map(({ categoryName }) => categoryName).join(', ')}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Share this result: <a className='text-blue-500 whitespace-nowrap' href={`/?address=${address}`}>
                {window.location.origin}/?address={address}</a>
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Secure Your Crypto with NameSky</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Did you know you can secure a named NEAR account like "abc.near" for almost free? NameSky, an app on the NEAR Protocol, lets you mint a NEAR account as an NFT, making it easy to preserve and transfer. Eliminate the risk of sending assets to the wrong address with a memorable and secure account name.
            </p>
          </div>
          <a className="w-full" href="https://namesky.app">
            <button className="mt-5 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </main>)
}

export default App
