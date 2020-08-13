import React, { useState, useEffect } from 'react';
import { MdDateRange, MdDone } from 'react-icons/md';

import { Header, TaskList, ColumList, Task, Tag } from './styles';

import logo from '../../assets/logo.svg';

import api from '../../services/api';

function Home() {
  const [school, setSchool] = useState([]);
  const [job, setJob] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const responseSchool = await api.get('tasks?from=escola');
      const responseJob = await api.get('tasks?from=trabalho');
      const responseDone = await api.get('tasks?from=true');

      setSchool(responseSchool.data);
      setJob(responseJob.data);
      setDone(responseDone.data);
    }

    loadTasks();
  }, []);

  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
      </Header>

      <TaskList>
        <ColumList>
          <h1>📕 Escola</h1>
          {school.map((task) => (
            <Task key={task.id}>
              <h1>{task.title}</h1>
              <Tag status={task.tag}>{task.tag}</Tag>
              <p>{task.description}</p>

              <footer>
                <span>
                  <MdDateRange size={28} color="#8E84FF" /> {task.finalDate}
                </span>

                <button type="button">
                  <MdDone size={20} color="#FFF" />
                </button>
              </footer>
            </Task>
          ))}
        </ColumList>
        <ColumList>
          <h1>💻 Trabalho</h1>
          {job.map((task) => (
            <Task key={task.id}>
              <h1>{task.title}</h1>
              <Tag status={task.tag}>{task.tag}</Tag>
              <p>{task.description}</p>

              <footer>
                <span>
                  <MdDateRange size={28} color="#8E84FF" /> {task.finalDate}
                </span>

                <button type="button">
                  <MdDone size={20} color="#FFF" />
                </button>
              </footer>
            </Task>
          ))}
        </ColumList>
        <ColumList>
          <h1>📌 Done! </h1>
          <Task done>
            <h1>Pesquisa de Biologia</h1>
            <Tag status="Done">Done</Tag>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </Task>
        </ColumList>
      </TaskList>
    </>
  );
}

export default Home;
