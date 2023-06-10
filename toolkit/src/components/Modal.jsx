import { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../app/crudSlice';

const AddModal = (prop) => {
  const dispatch = useDispatch();
  const { tasks } = useSelector(
    (store) => store.crudReducer
  );

  const [formState, setFormState] = useState({});

  /*  
       formun state in belirleme
 
  ? * düznlenicek eleman varsa stateValue değişkenine o elmanın bilgilerini aktar
  ? * düzenlenicek eleman yoksa o zaman state değerlerini boş bırak

  
  show değeri her değiştiğinde 
    yani bileşen her ekrana geldiğinde sorguyu tekrar yaptık
  */

  useEffect(() => {
    const stateValue = prop.editTask
      ? prop.editTask
      : {
          title: '',
          author: '',
          assigned_to: '',
          end_date: '',
        };

    setFormState(stateValue);
  }, [prop.show]);

  const handleSave = () => {
    // objeyi store a aktar
    /*
    ? klasik redux'ta olan:
    dipstach({
        type:"crudReducer/addTask",
        payload: formState
    })
    */
    dispatch(addTask(formState));
    // modalı kapat
    prop.handleClose();
  };

  if (!setFormState) return 'Loading..';

  return (
    <Modal
      show={prop.show}
      onHide={() => prop.handleClose()}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {prop.editTask ? 'Düzenleme Modu' : 'Ekleme Modu'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Başlık</Form.Label>
            <Form.Control
              type="text"
              placeholder="Başlık Giriniz"
              value={formState.title}
              //   inputun değerini state objesine aktarma
              onChange={(e) =>
                setFormState({
                  ...formState,
                  title: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Yazar</Form.Label>
            <Form.Control
              type="text"
              value={formState.author}
              placeholder="Başlık Giriniz"
              onChange={(e) =>
                setFormState({
                  ...formState,
                  author: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Kime Atanacak</Form.Label>
            <Form.Control
              type="text"
              value={formState.assigned_to}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  assigned_to: e.target.value,
                })
              }
            />
            <Form.Text>
              Görevin Atanacağı kişiyi belirleyin
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Teslim Tarihi</Form.Label>
            <Form.Control
              type="date"
              value={formState.end_date}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  end_date: e.target.value,
                })
              }
            />
            <Form.Text>
              Son teslim tarihini belirleyin
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => prop.handleClose()}>
          Kapat
        </Button>
        <Button onClick={handleSave} variant="success">
          Kaydet
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
