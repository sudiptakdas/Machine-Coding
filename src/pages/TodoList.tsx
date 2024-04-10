import React, { useState } from 'react';
interface taskArrayType {
  task: string;
  description: string;
}
const TodoList: React.FC = () => {
  const [formData, setFormData] = useState({
    task: '',
    description: '',
  });
  const [taskArray, setTaskArray] = useState<Array<taskArrayType>>([]);
  const [isEdit, setIsEdit] = useState(-1);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (isEdit > -1) {
      setTaskArray((prev) => {
        const updatedTask = [...prev];
        updatedTask[isEdit] = formData;
        setIsEdit(-1);
        return updatedTask;
      });
    } else {
      setTaskArray((prev) => [...prev, formData]);
    }
    setFormData({
      task: '',
      description: '',
    });
  };
  const renderData = () => {
    return taskArray.map((item, index) => (
      <div
        className=' bg-yellow-50 w-full border border-black text-lg flex  text-start gap-2 p-2 justify-between items-center'
        key={index}
        id={index.toString()}
      >
        <div>
          <li>{item.task}</li>
          <li>{item.description}</li>
        </div>
        <div className=' min-w-fit flex gap-2'>
          <button
            className=' text-white text-xl px-4 py-2 border border-blue bg-blue-400 rounded-xl  '
            onClick={() => onUpdate(index)}
          >
            Update
          </button>
          <button
            className=' text-white text-xl px-4 py-2 border border-blue bg-red-400 rounded-xl  '
            onClick={() => onDelete(index)}
          >
            Delete
          </button>
        </div>
      </div>
    ));
  };
  const onUpdate = (index: any) => {
    setIsEdit(index);
    setFormData(taskArray[index]);
  };
  const onDelete = (index: any) => {
    console.log(index);

    const newArray = taskArray.filter((item, i) => {
      if (index != i) {
        return item;
      }
    });
    setTaskArray(newArray);
  };
  return (
    <div className='flex flex-col gap-6 '>
      <h1 className=' text-6xl text-white  bg-gray-800 font-semibold p-4'>
        Todo List
      </h1>
      <form onSubmit={handleFormSubmit}>
        <div className=' flex justify-center mx-10 w-full gap-6 items-center'>
          <div className=' '>
            <h1 className=' font-semibold text-lg items-start flex'>
              Add Task
            </h1>
            <input
              title='Task'
              className=' w-full text-2xl p-2 rounded-lg border border-black'
              placeholder='Add Task'
              value={formData.task}
              onChange={(e) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    task: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className=''>
            <h1 className=' font-semibold text-lg items-start flex'>
              Add Description
            </h1>
            <input
              title='Description'
              className=' w-full text-2xl p-2 rounded-lg border border-black'
              placeholder='Add Description'
              value={formData.description}
              onChange={(e) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    description: e.target.value,
                  };
                });
              }}
            />
          </div>
          <button
            type='submit'
            className=' text-white text-xl w-2/12 mt-6 py-3 border border-blue bg-blue-700 rounded-xl  '
          >
            {isEdit === -1 ? 'Add Task' : 'Update Task'}
          </button>
        </div>
      </form>
      <div>
        <ul className=' grid grid-cols-2 gap-4 mx-4 p-2'>
          {renderData().length > 0 && renderData()}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
