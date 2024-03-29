import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil utilização',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        Visando uma melhoria de um novo sistema para registrar demandas de novos sistemas e buscando extinguir o uso do formulário em SharePoint.
      </>
    ),
  },
  {
    title: 'Organização',
    Svg: require('@site/static/img/organization.svg').default,
    description: (
      <>
         Um sistema para gerenciamento dos processos das demandas durante sua execução.
      </>
    ),
  },
  {
    title: 'Modernização',
    Svg: require('@site/static/img/modernization.svg').default,
    description: (
      <>
        Facilitar o método burocrático de gestão das solicitações e aprovações de sistemas de TI, 
        centralizando os dados e otimizando o processo produtivo.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
