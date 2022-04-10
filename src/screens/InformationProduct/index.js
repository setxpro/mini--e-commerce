import React, { useEffect, useState } from 'react';
import { Produtos } from '../../data/Produtos';
import { Layout } from '../../Styles/Layout/styles';
import { useParams } from 'react-router-dom';

import * as C from './styles';

function InformationProduct() {

    const { id } = useParams();
    const [produto, setProduto] = useState('');
    const [loadindProd, setLoadingProd] = useState(true);

    useEffect(() => {

        if (loadindProd) {
            const prod = Produtos.filter(t => t.id_prod === parseInt(id))[0];
            setProduto({
                name: prod.name,
                photo: prod.photo,
                description: prod.description,
                price: prod.price,
            });
            setLoadingProd(false);
        }

    }, [loadindProd]);


  return (
      <Layout>
          <C.Container>
            <section>
                <C.AreaImage>
                    <img src={produto.photo} alt='photo'/>
                </C.AreaImage>
                <C.AreaInfo>
                    <h2>{produto.name}</h2>
                    <p>{produto.description}</p>

                    <C.AreaMoreInfo>
                            <C.AreaInfoDescription>
                                <div><p>Preço</p> <span>R$ {produto.price}</span> </div>
                                <div><p>Status</p> <span>Ativo</span></div>
                                <div><p>Avaliação</p> ***** </div>
                                <div>Unidade
                                    <select>
                                       <option>1</option>
                                       <option>2</option>
                                       <option>3</option>
                                       <option>4</option>
                                    </select>
                                </div>
                                <button>Adicionar ao Carrinho</button>
                            </C.AreaInfoDescription>

                        <C.AreaFormPayment>
                           <h3>Meios de pagamento</h3>
                           <button><C.CardIcon/> Pague em até 6x sem juros!</button>
                          <C.AreaMercadoPago>
                            <p>Boleto parcelado em até 12x</p>
                            <img src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mlb-consumer_credits-medium_v_04d70df495.png" alt='mercado-pago'/>
                          </C.AreaMercadoPago>
                          <div>
                              <p>Cartões de crédito</p>
                              <C.ContainerCardsIcons>
                                  <img src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mlb-master-medium_v_04d70df495.png" alt='mastercard'/>
                                  <img src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mlb-hipercard-medium_v_04d70df495.png" alt='Hipercard'/>
                                  <img src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mlb-elo-medium_v_04d70df495.png" alt='Elo'/>
                                  <img src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mlb-visa-medium_v_04d70df495.png" alt='Visa'/>
                              </C.ContainerCardsIcons>
                                    <C.AreaDebito>
                                        <p>Cartões de débito</p>
                                        <img src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mlb-debelo-medium_v_04d70df495.png" alt='caixa'/>
                                    </C.AreaDebito>
                                    <C.AreaPix>
                                        <p>Pix</p>
                                        <img src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mlb-pix-medium_v_04d70df495.png" alt="Pix"/>
                                    </C.AreaPix>
                                    <C.AreaBoleto>
                                        <p>Boleto bancário</p>
                                        <img src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mlb-bolbradesco-medium_v_04d70df495.png" alt='boleto'/>
                                    </C.AreaBoleto>
                            </div>


                        </C.AreaFormPayment>


                    </C.AreaMoreInfo>
                    <div>
                        {/* TO WRITE A CUSTOMER REVIEW*/}
                    </div>
                </C.AreaInfo>
            </section>
            <section>

            </section>
          </C.Container>
      </Layout>
  );
}

export default InformationProduct;