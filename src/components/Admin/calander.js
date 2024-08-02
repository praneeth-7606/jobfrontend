
// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import Badge from '@mui/material/Badge';
// import { PickersDay } from '@mui/x-date-pickers/PickersDay';
// import CheckIcon from '@mui/icons-material/Check';

// const Calendar = () => {
//   const [value, setValue] = useState(new Date());
//   const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <StaticDatePicker
//         // mask='____/__/__'
//         variant='static'
//         orientation='portrait'
//         value={value}
//         disableFuture
//         onChange={(newValue) => setValue(newValue)}
//         renderInput={(params) => {
//           <TextField {...params} />;
//         }}
//         renderDay={(day, _value, DayComponentProps) => {
//           const isSelected =
//             !DayComponentProps.outsideCurrentMonth &&
//             highlightedDays.indexOf(day.getDate()) >= 0;

//           return (
//             <Badge
//               key={day.toString()}
//               overlap='circular'
//               badgeContent={isSelected ? <CheckIcon color='red' /> : undefined}
//             >
//               <PickersDay {...DayComponentProps} />
//             </Badge>
//           );
//         }}
//       />
//     </LocalizationProvider>
//   );
// };

// export default Calendar;
// import * as React from 'react';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

// export default function BasicDateCalendar() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DateCalendar />
//     </LocalizationProvider>
//   );
// }

import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Layout from '../layout/layout';

export default function BasicDateCalendar() {
  return (
    <Layout>
      <Row className="justify-content-center">
        <Col xs={12} md={4}>
          <Card border="primary">
            <Card.Header className="text-center">Calendar</Card.Header>
            <Card.Body>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div style={{ border: '',paddingTop:"5%" ,borderRadius: '5px', padding: '5%' ,marginTop:"5%"}}>
                  <DateCalendar />
                </div>
<br></br>
              </LocalizationProvider>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}
