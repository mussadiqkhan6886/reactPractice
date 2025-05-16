import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import finnHub from '../apis/finnHub';
import { WatchListContext } from '../contextAPI/WatchListContext';

const StockList = () => {
  const [stock, setStock] = useState([]);
  const { watchList } = useContext(WatchListContext)
    const navigate = useNavigate()

  const changeColor = (change) => {
    return change > 0 ? 'text-green-600' : 'text-red-600';
  };


  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          watchList.map((symbol) =>
            finnHub.get('/quote', {
              params: { symbol },
            })
          )
        );
        const data = responses.map((resp) => ({
          data: resp.data,
          symbol: resp.config.params.symbol,
        }));

        if (isMounted) {
          setStock(data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [watchList]);

  const handlePageChange = (symbol) => {
    navigate(`details/${symbol}`)
  }

  return (
    <div className='flex justify-center'>
      <table className='m-2'>
        <thead className='border-b-1'>
          <tr>
            <th className='p-3 px-5'>Name</th>
            <th className='p-3 px-5'>Last</th>
            <th className='p-3 px-5'>Chg</th>
            <th className='p-3 px-5'>Chg%</th>
            <th className='p-3 px-5'>High</th>
            <th className='p-3 px-5'>Low</th>
            <th className='p-3 px-5'>Open</th>
            <th className='p-3 px-5'>Pclose</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((data) => (
            <tr onClick={() => handlePageChange(data.symbol)} className='p-10 cursor-pointer' key={data.symbol}>
              <th className='text-left px-5'>{data.symbol}</th>
              <td  className='p-1 px-5 text-left'>{data.data.c}</td>
              <td className={changeColor(data.data.d)}>{data.data.d} {data.data.d > 0 ? <i className="fa-solid fa-arrow-up"></i> : <i className="fa-solid fa-arrow-down"></i>}</td>
              <td className={changeColor(data.data.dp)}>{data.data.dp} {data.data.dp > 0 ? <i className="fa-solid fa-arrow-up"></i> : <i className="fa-solid fa-arrow-down"></i>}</td>
              <td  className='p-1 px-5 text-left'>{data.data.h}</td>
              <td className='p-1 px-5 text-left' >{data.data.l}</td>
              <td className='p-1 px-5 text-left' >{data.data.o}</td>
              <td className='p-1 px-5 text-left' >{data.data.pc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
