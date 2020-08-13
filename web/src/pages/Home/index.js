import React from 'react';
import { MdDateRange, MdDone } from 'react-icons/md';

import { Header, TaskList, ColumList, Task, Tag } from './styles';

import logo from '../../assets/logo.svg';

function Home() {
  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
      </Header>

      <TaskList>
        <ColumList>
          <h1>📕 Escola</h1>
          <Task>
            <h1>Pesquisa de Biologia</h1>
            <Tag status="Tranquilo">Tranquilo</Tag>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>

            <footer>
              <span>
                <MdDateRange size={28} color="#8E84FF" /> 2 Days
              </span>

              <button type="button">
                <MdDone size={20} color="#FFF" />
              </button>
            </footer>
          </Task>
        </ColumList>
        <ColumList>
          <h1>💻 Trabalho</h1>
          <Task>
            <h1>Pesquisa de Biologia</h1>
            <Tag status="Urgente">Urgente</Tag>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>

            <footer>
              <span>
                <MdDateRange size={28} color="#8E84FF" /> 2 Days
              </span>

              <button type="button">
                <MdDone size={20} color="#FFF" />
              </button>
            </footer>
          </Task>
          <Task>
            <h1>Pesquisa de Biologia</h1>
            <Tag status="Moderado">Moderado</Tag>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>

            <footer>
              <span>
                <MdDateRange size={28} color="#8E84FF" /> 2 Days
              </span>

              <button type="button">
                <MdDone size={20} color="#FFF" />
              </button>
            </footer>
          </Task>
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
