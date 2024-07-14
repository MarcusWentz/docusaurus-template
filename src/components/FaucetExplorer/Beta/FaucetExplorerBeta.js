import React, {useState} from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import FaucetDataCustom from '@site/src/components/FaucetExplorer/Beta/FaucetDataCustomBeta.js';
import FaucetDataDay from '@site/src/components/FaucetExplorer/Beta/FaucetDataDayBeta.js';
import FaucetDataTotal from '@site/src/components/FaucetExplorer/Beta/FaucetDataTotalBeta.js';
import timestamp from 'unix-timestamp';
import dayjs from 'dayjs';


export default function datePicker() {
  timestamp.round = true

  const [value, onChange] = useState([dayjs().startOf('day').toString(), new Date()]);
  const timeNow = Math.round(timestamp.now() / 60);
  const timestampFrom = Math.round(timeNow - timestamp.fromDate(value[0]) / 60);
  const timestampTo= Math.max(0, Math.round(timeNow - timestamp.fromDate(value[1]) / 60));
  const startOfDay = dayjs().startOf('day').toString();


  return (

    <div>
      <div class="faucetContainer">
        <div class="faucetItem">
          <h3>Day</h3>
          <FaucetDataDay timestampFrom={timestampFrom} timestampTo ={timestampTo} timeNow={timeNow} onChange={onChange}/>

        </div>
        <div class="faucetItem">
          <h3>Total</h3>
          <FaucetDataTotal timestampFrom={timestampFrom} timestampTo ={timestampTo} timeNow={timeNow} onChange={onChange}/>
        </div>
        <div class="faucetItem">
          <h3>Custom Range</h3>
        <FaucetDataCustom timestampFrom={timestampFrom} timestampTo ={timestampTo} timeNow={timeNow} onChange={onChange}/>

            <DateRangePicker onChange={onChange} value={value} minDate={new Date('2023, 02, 14')} maxDate={new Date()}/>
        </div>
    </div>

    </div>

);

}
