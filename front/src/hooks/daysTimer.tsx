

function TimeForToday(value : string) : string{
    const today = new Date();
    const timeValue = new Date(value);
    const Yeer = timeValue.getFullYear() + '년 '
    const Month = timeValue.getMonth() + 1 + '월 '
    const Day = timeValue.getDate() + -1 + '일 ';
    

   const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
   if (betweenTime < 1) return '방금전';
   if (betweenTime < 60) {
       return `${betweenTime}분전`;
   }

   const betweenTimeHour = Math.floor(betweenTime / 60);
   if (betweenTimeHour < 24) {
       return `${betweenTimeHour}시간전`;
   }

   const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
   if (betweenTimeDay < 8) {
       return `${betweenTimeDay}일전`;
   }
 
   
   
   return `${Yeer + Month + Day}`
}

export default TimeForToday 