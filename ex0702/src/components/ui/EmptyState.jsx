// 0702 1시 수업
import React from 'react'

const EmptyState = ({message, currentFilter}) => {

  const getMessage = () => {
    if (message) return message;

    switch (currentFilter) {
      case 'completed':
        return '완료된 일이 없습니다'
      case 'incompleted':
        return '진행 중인 할 일이 없습니다'
      default:
        return '할 일이 없습니다. 새로운 일을 등록 해보세요!'
    }
  }

  return (
    <div className='text-center py-5'>
      <div className='alert alert-info' role='alert'>
        <p className='mb-3'>
          {getMessage()}
        </p>
      </div>
    </div>
  )
}

export default EmptyState