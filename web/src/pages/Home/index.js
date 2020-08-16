import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdDateRange, MdDone } from 'react-icons/md';

import { Header, TaskList, ColumList, Task, Tag } from './styles';
import logo from '../../assets/logo.svg';

import * as TaskActions from '../../store/modules/task/actions';

export default function Home() {
  const school = useSelector((state) => state.task.school);
  const job = useSelector((state) => state.task.job);
  const done = useSelector((state) => state.task.done);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TaskActions.loadTaskRequest());
  }, []);

  function handleMarkDone(id) {
    dispatch(TaskActions.markDoneRequest(id));
  }

  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
      </Header>

      <TaskList>
        <ColumList>
          <h1>📕 Escola</h1>
          {school &&
            school.map((task) => (
              <Task key={task.id}>
                <h1>{task.title}</h1>
                <Tag status={task.tag}>{task.tag}</Tag>
                <p>{task.description}</p>

                <footer>
                  <span>
                    <MdDateRange size={28} color="#8E84FF" /> {task.finalDate}
                  </span>

                  <button type="button" onClick={() => handleMarkDone(task.id)}>
                    <MdDone size={20} color="#FFF" />
                  </button>
                </footer>
              </Task>
            ))}
        </ColumList>
        <ColumList>
          <h1>💻 Trabalho</h1>
          {job &&
            job.map((task) => (
              <Task key={task.id}>
                <h1>{task.title}</h1>
                <Tag status={task.tag}>{task.tag}</Tag>
                <p>{task.description}</p>

                <footer>
                  <span>
                    <MdDateRange size={28} color="#8E84FF" /> {task.finalDate}
                  </span>

                  <button type="button" onClick={() => handleMarkDone(task.id)}>
                    <MdDone size={20} color="#FFF" />
                  </button>
                </footer>
              </Task>
            ))}
        </ColumList>
        <ColumList>
          <h1>📌 Done! </h1>
          {done &&
            done.map((task) => (
              <Task key={task.id} done>
                <h1>{task.title}</h1>
                <Tag status="Done">Done</Tag>
                <p>{task.description}</p>
              </Task>
            ))}
        </ColumList>
      </TaskList>
    </>
  );
}
