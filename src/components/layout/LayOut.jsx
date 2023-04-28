import { Header } from "components/header/Header"
import { Hero } from "components/hero/Hero"
import { About } from "components/about/About"
import { Cases } from "components/cases/Cases"
import { Blog } from "components/blog/Blog"
import { Team } from "components/team/Team"
import { Contact } from "components/contacts/Contact"
import { Footer } from "components/footer/Footer"
import { Modal } from "components/modal/Modal"
import { useState } from 'react';
export function LayOut(){
    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState('');
    const toggleModal = () => {
        setShowModal(prevState => !prevState);
      };
      const getModalImg = img => {
        setModalImg(img);
      };

    return <div className="">
     <Header/>
     <Hero/>
     <About/>
     <Cases  showModal={toggleModal}
        getImg={getModalImg}/>
     <Blog/>
     <Team/>
     <Contact/>
     <Footer/>
     {showModal && <Modal src={modalImg} toggleModal={toggleModal} />}
    </div>
   }