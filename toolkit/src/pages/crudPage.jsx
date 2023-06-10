import { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Table,
} from 'react-bootstrap';
import AddModal from '../components/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../app/crudSlice';

const CrudPage = () => {
  const state = useSelector((store) => store.crudReducer);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  //   düzenlenecek eleman
  /*
    başlangıçta null olarak belirliyoruz.
    modala eğer null gönderilirse modal bunu farkedecek ve ekleme işlemi yapacak
    düzenle butona tıklanır ve state'in içerisine değer atanırsa
    o zaman modal gönderilince modal bunu tespit eder ve düzenleme işlemi yapar
  */
  const [editTask, setEditTask] = useState(null);

  const handleClose = () => {
    //   düzenlenecek elamanı sil
    setEditTask(null);
    // modal'ı kapat
    setShowModal(false);
  };

  return (
    <div className="m-2">
      <AddModal
        show={showModal}
        handleClose={handleClose}
        editTask={editTask}
      />
      <Button
        variant="success"
        className="my-3"
        // modal'ı açar
        onClick={() => setShowModal(true)}
      >
        Yeni Eleman Ekle
      </Button>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Görev</th>
            <th>Yazar</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {state.tasks.map((task) => (
            <tr>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup>
                  <Button
                    onClick={() =>
                      dispatch(removeTask(task.id))
                    }
                    variant="danger"
                  >
                    Sil
                  </Button>
                  <Button
                    onClick={() => {
                      // düzenlencek elemanı state'e aktarır
                      setEditTask(task);
                      //   modal'ı açar
                      setShowModal(true);
                    }}
                  >
                    Düzenle
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudPage;
