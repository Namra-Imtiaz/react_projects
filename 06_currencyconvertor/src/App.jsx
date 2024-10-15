import { useState } from 'react';
import Input from './components/Input'; // Import without curly braces
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Using our custom hook
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * (currencyInfo[to] || 1));
  };

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
           style={{
             backgroundImage: `url('https://i.pinimg.com/564x/4a/be/b1/4abeb1936056e7cf0fcbd52c17208908.jpg')`
           }}>
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                convert(); // Convert when form is submitted
              }}>
              <div className='w-full mb-1'>
                <Input
                  label='from'
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button type='button'
                        className='absolute left-1/2-translate-x-1/2-translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                        onClick={swap}>
                  swap
                </button>
              </div>
              <div className='w-full mt-1 mb-4'>
                <Input 
                  label='to'
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                convert {from} to {to}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
