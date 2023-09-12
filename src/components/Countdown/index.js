import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Temporal } from '@js-temporal/polyfill'
const FeatureList = [
  {
    title: "Kavandi esitamine",
    deadline: "2023-09-27T00:00:00.000",
    Svg: require('@site/static/img/plan-icon.svg').default,
    description: (
      <>
        Kavand annab ülevaate plaanitavast tööst - lõputöö teema, kirjandus ja
        sisukord on detailid, mis peavad selleks ajaks paigas olema.
      </>
    ),
  },
  {
    title: 'Lõputöö esitamine eelkaitsmiseks',
    deadline: "2023-12-07T00:00:00.000",
    Svg: require('@site/static/img/document.svg').default,
    description: (
      <>
        Lõputöö esitatakse Moodle keskkonnas elektroonselt.
      </>
    ),
  },
  {
    title: 'Lõputöö eelkaitsmised',
    deadline: "2023-12-12T00:00:00.000",
    Svg: require('@site/static/img/presentation-talk.svg').default,
    description: (
      <>
        Lõputöö eelkaitsmine laseb harjutada kaitsmist ja tuvastab vigu.
      </>
    ),
  },
  {
    title: 'Lõputöö esitamine kaitsmiseks',
    deadline: "2024-01-04T00:00:00.000",
    Svg: require('@site/static/img/reviewed-document.svg').default,
    description: (
      <>
        Moodle keskkonnas tuleb esitada lõputöö PDF-vormingus,
        digiallkirjaga koos digiallkirjastatud juhendaja arvamusega ning
        täita metaandmete tabel.
        </>
    ),
  },
  {
    title: 'Lõputöö kaitsmised',
    deadline: "2023-01-17T00:00:00.000",
    Svg: require('@site/static/img/presentation.svg').default,
    description: (
      <>
        Lõputöö kaitsmine - viimane proovikivi!
      </>
    ),
  },
];

function Feature({Svg, title, description, deadline}) {
    const now_date = Temporal.Now.plainDateISO()
    return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <h4>{Temporal.PlainDate.from(now_date).until(deadline).total({unit: 'day'})} päeva tähtajani</h4>
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
