import React, { useEffect, useState } from 'react';
import { Produtos } from '../../data/Produtos';
import { Layout } from '../../Styles/Layout/styles';
import { Link, useParams } from 'react-router-dom';

import Spinner from '../../utils/Spinner';

import * as C from './styles';
import Comments from '../../Components/Comments';

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
                countInStock: prod.countInStock,
            });
            setLoadingProd(false);
        }

    }, [loadindProd]);


  return (
      <Layout>
          {loadindProd ? <Spinner/> : 
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
                                <div><p>Estoque</p> <span>{produto.countInStock}</span></div>
                                {produto.countInStock > 0 ? (
                                <div>Unidade
                                    <select>
                                        {[...Array(produto.countInStock).keys()].map((i) => (
                                            <option key={i + 1} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>  
                                </div>
                                 ) : alert('Não há mais unidades no estoque :(')}
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
                    <C.AreaRegister>
                        <h5>Cadastre-se para Comentar e receber notificações sobre descontos e novos produtos</h5>
                        <Link to="/register">Cadastrar</Link>
                    </C.AreaRegister>
                </C.AreaInfo>
            </section>
            <section>
              
                <Comments
                    
                />
                <Comments
                    
                />
                <Comments
                    
                />
                <Comments
                    
                />
                <Comments
                    
                />
                <Comments
                    
                />
                <Comments
                    
                />
            </section>
          </C.Container>
          }
      </Layout>
  );
}

export default InformationProduct;