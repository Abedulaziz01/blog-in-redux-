import { parseISO,formatDistanceToNow } from "date-fns";
import React from 'react'

const TimeAgo = ({timestamp}) => {
     let timeago=''
     if (timestamp){
         const date = parseISO(timestamp)
         const timeperiod = formatDistanceToNow(date)
         timeago  = `${timeperiod} ago`
     }



  return (
    <span title={timestamp}>
      &nbsp; <i>{timeago}</i>
    </span>
  )
}

export default TimeAgo