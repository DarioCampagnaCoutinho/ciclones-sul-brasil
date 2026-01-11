import React, { useState } from 'react';

const ciclones = [
  {
    id: 1,
    nome: "Ciclone Bomba (2020)",
    data: "30 de junho de 2020",
    categoria: "Ciclone Extratropical",
    ventos: "até 120 km/h",
    estadosAfetados: ["Santa Catarina", "Rio Grande do Sul", "Paraná"],
    descricao: "Um dos ciclones mais intensos já registrados na região, causou ventos destrutivos, ondas de até 10 metros e deixou milhares de pessoas sem energia elétrica.",
    danos: "Destelhamentos, quedas de árvores, interrupção de energia para mais de 1,5 milhão de pessoas.",
    imagem: "🌀"
  },
  {
    id: 2,
    nome: "Ciclone Yakecan (2022)",
    data: "16-18 de maio de 2022",
    categoria: "Ciclone Subtropical",
    ventos: "até 110 km/h",
    estadosAfetados: ["Rio Grande do Sul", "Santa Catarina"],
    descricao: "Primeiro ciclone subtropical a receber nome no Atlântico Sul. Trouxe ventos fortes, chuvas intensas e ressaca marítima significativa.",
    danos: "Alagamentos, deslizamentos, danos em estruturas costeiras e quedas de energia.",
    imagem: "🌊"
  },
  {
    id: 3,
    nome: "Ciclone Akará (2024)",
    data: "18-20 de fevereiro de 2024",
    categoria: "Ciclone Subtropical",
    ventos: "até 95 km/h",
    estadosAfetados: ["Rio Grande do Sul", "Santa Catarina"],
    descricao: "Segundo ciclone subtropical nomeado no Brasil, trouxe chuvas intensas e ventos fortes para o litoral gaúcho e catarinense.",
    danos: "Alagamentos em áreas costeiras, ressaca e interrupções pontuais de energia.",
    imagem: "⛈️"
  },
  {
    id: 4,
    nome: "Ciclone Catarina (2004)",
    data: "24-28 de março de 2004",
    categoria: "Furacão Categoria 2",
    ventos: "até 180 km/h",
    estadosAfetados: ["Santa Catarina", "Rio Grande do Sul"],
    descricao: "Primeiro furacão documentado no Atlântico Sul. Fenômeno extremamente raro que atingiu o litoral catarinense com força devastadora.",
    danos: "11 mortes, mais de 36.000 casas danificadas, prejuízos de R$ 1 bilhão.",
    imagem: "🌪️"
  },
  {
    id: 5,
    nome: "Ciclone Iba (2019)",
    data: "23-25 de março de 2019",
    categoria: "Ciclone Subtropical",
    ventos: "até 65 km/h",
    estadosAfetados: ["Rio Grande do Sul"],
    descricao: "Primeiro ciclone subtropical oficialmente monitorado pelo Brasil, permaneceu majoritariamente sobre o oceano.",
    danos: "Impactos limitados, principalmente ressaca e chuvas no litoral gaúcho.",
    imagem: "🌧️"
  }
];

const dicasSeguranca = [
  { icone: "🏠", titulo: "Proteja sua casa", texto: "Reforce portas e janelas, guarde objetos soltos do quintal." },
  { icone: "📱", titulo: "Mantenha-se informado", texto: "Acompanhe alertas da Defesa Civil e meteorologia." },
  { icone: "🔦", titulo: "Kit de emergência", texto: "Tenha lanterna, pilhas, água e alimentos não perecíveis." },
  { icone: "🚗", titulo: "Evite deslocamentos", texto: "Não dirija durante o ciclone, evite áreas alagadas." },
  { icone: "⚡", titulo: "Cuidado com eletricidade", texto: "Desligue aparelhos e evite contato com fios caídos." },
  { icone: "📞", titulo: "Números de emergência", texto: "Defesa Civil: 199 | Bombeiros: 193 | SAMU: 192" }
];

function App() {
  const [cicloneSelecionado, setCicloneSelecionado] = useState(null);
  const [abaAtiva, setAbaAtiva] = useState('historico');

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <span style={styles.headerIcon}>🌀</span>
          <div>
            <h1 style={styles.titulo}>Ciclones do Sul do Brasil</h1>
            <p style={styles.subtitulo}>Informações sobre fenômenos meteorológicos na região</p>
          </div>
        </div>
      </header>

      <nav style={styles.nav}>
        <button 
          style={{...styles.navButton, ...(abaAtiva === 'historico' ? styles.navButtonAtivo : {})}}
          onClick={() => setAbaAtiva('historico')}
        >
          📜 Histórico
        </button>
        <button 
          style={{...styles.navButton, ...(abaAtiva === 'entenda' ? styles.navButtonAtivo : {})}}
          onClick={() => setAbaAtiva('entenda')}
        >
          📚 Entenda
        </button>
        <button 
          style={{...styles.navButton, ...(abaAtiva === 'seguranca' ? styles.navButtonAtivo : {})}}
          onClick={() => setAbaAtiva('seguranca')}
        >
          🛡️ Segurança
        </button>
      </nav>

      <main style={styles.main}>
        {abaAtiva === 'historico' && (
          <section>
            <h2 style={styles.secaoTitulo}>Principais Ciclones Registrados</h2>
            <div style={styles.cardsGrid}>
              {ciclones.map(ciclone => (
                <div 
                  key={ciclone.id} 
                  style={styles.card}
                  onClick={() => setCicloneSelecionado(ciclone)}
                >
                  <div style={styles.cardIcone}>{ciclone.imagem}</div>
                  <h3 style={styles.cardTitulo}>{ciclone.nome}</h3>
                  <p style={styles.cardCategoria}>{ciclone.categoria}</p>
                  <p style={styles.cardData}>{ciclone.data}</p>
                  <div style={styles.cardVentos}>
                    <span>💨 {ciclone.ventos}</span>
                  </div>
                  <div style={styles.cardEstados}>
                    {ciclone.estadosAfetados.map(estado => (
                      <span key={estado} style={styles.estadoTag}>{estado}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {abaAtiva === 'entenda' && (
          <section>
            <h2 style={styles.secaoTitulo}>Entenda os Ciclones</h2>
            
            <div style={styles.infoBox}>
              <h3 style={styles.infoTitulo}>🌀 O que é um Ciclone?</h3>
              <p style={styles.infoTexto}>
                Ciclones são sistemas de baixa pressão atmosférica caracterizados por ventos que giram 
                em sentido horário no Hemisfério Sul. Eles se formam quando massas de ar quente e frio 
                se encontram, criando instabilidade atmosférica.
              </p>
            </div>

            <div style={styles.tiposGrid}>
              <div style={styles.tipoCard}>
                <div style={styles.tipoIcone}>🌊</div>
                <h4 style={styles.tipoTitulo}>Ciclone Extratropical</h4>
                <p style={styles.tipoTexto}>
                  Forma-se em latitudes médias pelo encontro de massas de ar com temperaturas diferentes. 
                  É o tipo mais comum no Sul do Brasil, especialmente no outono e inverno.
                </p>
              </div>
              <div style={styles.tipoCard}>
                <div style={styles.tipoIcone}>🌴</div>
                <h4 style={styles.tipoTitulo}>Ciclone Subtropical</h4>
                <p style={styles.tipoTexto}>
                  Possui características mistas entre tropical e extratropical. Forma-se sobre águas 
                  relativamente quentes e pode se intensificar rapidamente.
                </p>
              </div>
              <div style={styles.tipoCard}>
                <div style={styles.tipoIcone}>🌪️</div>
                <h4 style={styles.tipoTitulo}>Furacão (raro)</h4>
                <p style={styles.tipoTexto}>
                  Extremamente raro no Atlântico Sul. O Catarina (2004) foi o único furacão 
                  documentado a atingir o Brasil, um evento considerado histórico.
                </p>
              </div>
            </div>

            <div style={styles.infoBox}>
              <h3 style={styles.infoTitulo}>📍 Por que o Sul do Brasil?</h3>
              <p style={styles.infoTexto}>
                A região Sul é mais suscetível a ciclones devido à sua posição geográfica, onde 
                massas de ar polar e tropical frequentemente se encontram. A costa extensa e a 
                proximidade com o oceano Atlântico também contribuem para a formação desses fenômenos.
              </p>
            </div>

            <div style={styles.estatisticas}>
              <h3 style={styles.infoTitulo}>📊 Estatísticas</h3>
              <div style={styles.statsGrid}>
                <div style={styles.statItem}>
                  <span style={styles.statNumero}>10-15</span>
                  <span style={styles.statLabel}>Ciclones por ano na região</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.statNumero}>Mar-Set</span>
                  <span style={styles.statLabel}>Período mais frequente</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.statNumero}>3</span>
                  <span style={styles.statLabel}>Estados mais afetados</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {abaAtiva === 'seguranca' && (
          <section>
            <h2 style={styles.secaoTitulo}>Dicas de Segurança</h2>
            <div style={styles.dicasGrid}>
              {dicasSeguranca.map((dica, index) => (
                <div key={index} style={styles.dicaCard}>
                  <span style={styles.dicaIcone}>{dica.icone}</span>
                  <h4 style={styles.dicaTitulo}>{dica.titulo}</h4>
                  <p style={styles.dicaTexto}>{dica.texto}</p>
                </div>
              ))}
            </div>

            <div style={styles.alertaBox}>
              <h3 style={styles.alertaTitulo}>⚠️ Em caso de emergência</h3>
              <p style={styles.alertaTexto}>
                Se você está em uma área de risco durante um ciclone, procure abrigo imediatamente 
                em local seguro, longe de janelas e objetos que possam cair. Não tente atravessar 
                áreas alagadas a pé ou de carro.
              </p>
            </div>

            <div style={styles.linkBox}>
              <h4>🔗 Links Úteis</h4>
              <ul style={styles.linkLista}>
                <li>INMET - Instituto Nacional de Meteorologia</li>
                <li>Defesa Civil do seu estado</li>
                <li>Centro de Previsão de Tempo e Estudos Climáticos (CPTEC/INPE)</li>
                <li>Marinha do Brasil - Avisos de Mau Tempo</li>
              </ul>
            </div>
          </section>
        )}
      </main>

      {cicloneSelecionado && (
        <div style={styles.modal} onClick={() => setCicloneSelecionado(null)}>
          <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button style={styles.fecharModal} onClick={() => setCicloneSelecionado(null)}>✕</button>
            <div style={styles.modalIcone}>{cicloneSelecionado.imagem}</div>
            <h2 style={styles.modalTitulo}>{cicloneSelecionado.nome}</h2>
            <span style={styles.modalCategoria}>{cicloneSelecionado.categoria}</span>
            
            <div style={styles.modalInfo}>
              <div style={styles.modalInfoItem}>
                <strong>📅 Data:</strong> {cicloneSelecionado.data}
              </div>
              <div style={styles.modalInfoItem}>
                <strong>💨 Ventos:</strong> {cicloneSelecionado.ventos}
              </div>
              <div style={styles.modalInfoItem}>
                <strong>📍 Estados afetados:</strong> {cicloneSelecionado.estadosAfetados.join(', ')}
              </div>
            </div>
            
            <div style={styles.modalSecao}>
              <h4>Descrição</h4>
              <p>{cicloneSelecionado.descricao}</p>
            </div>
            
            <div style={styles.modalSecao}>
              <h4>Danos Registrados</h4>
              <p>{cicloneSelecionado.danos}</p>
            </div>
          </div>
        </div>
      )}

      <footer style={styles.footer}>
        <p>Informações compiladas para fins educativos</p>
        <p>Em caso de emergência, siga as orientações da Defesa Civil</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0f172a',
    color: '#e2e8f0',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)',
    padding: '2rem',
    borderBottom: '1px solid #334155',
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  headerIcon: {
    fontSize: '3rem',
  },
  titulo: {
    margin: 0,
    fontSize: '2rem',
    color: '#f8fafc',
  },
  subtitulo: {
    margin: '0.5rem 0 0 0',
    color: '#94a3b8',
    fontSize: '1rem',
  },
  nav: {
    display: 'flex',
    gap: '0.5rem',
    padding: '1rem 2rem',
    backgroundColor: '#1e293b',
    borderBottom: '1px solid #334155',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  navButton: {
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    backgroundColor: 'transparent',
    color: '#94a3b8',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.2s',
  },
  navButtonAtivo: {
    backgroundColor: '#3b82f6',
    color: '#fff',
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  secaoTitulo: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    color: '#f8fafc',
    borderBottom: '2px solid #3b82f6',
    paddingBottom: '0.5rem',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: '1rem',
    padding: '1.5rem',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    border: '1px solid #334155',
    ':hover': {
      transform: 'translateY(-4px)',
    },
  },
  cardIcone: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
  },
  cardTitulo: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.25rem',
    color: '#f8fafc',
  },
  cardCategoria: {
    color: '#60a5fa',
    fontSize: '0.875rem',
    margin: '0 0 0.25rem 0',
  },
  cardData: {
    color: '#94a3b8',
    fontSize: '0.875rem',
    margin: '0 0 0.75rem 0',
  },
  cardVentos: {
    color: '#fbbf24',
    marginBottom: '0.75rem',
  },
  cardEstados: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  estadoTag: {
    backgroundColor: '#334155',
    padding: '0.25rem 0.75rem',
    borderRadius: '1rem',
    fontSize: '0.75rem',
    color: '#cbd5e1',
  },
  infoBox: {
    backgroundColor: '#1e293b',
    borderRadius: '1rem',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    border: '1px solid #334155',
  },
  infoTitulo: {
    margin: '0 0 1rem 0',
    color: '#f8fafc',
  },
  infoTexto: {
    color: '#cbd5e1',
    lineHeight: 1.7,
    margin: 0,
  },
  tiposGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  tipoCard: {
    backgroundColor: '#1e293b',
    borderRadius: '1rem',
    padding: '1.5rem',
    textAlign: 'center',
    border: '1px solid #334155',
  },
  tipoIcone: {
    fontSize: '2.5rem',
    marginBottom: '0.75rem',
  },
  tipoTitulo: {
    margin: '0 0 0.75rem 0',
    color: '#60a5fa',
  },
  tipoTexto: {
    color: '#94a3b8',
    fontSize: '0.9rem',
    lineHeight: 1.6,
    margin: 0,
  },
  estatisticas: {
    backgroundColor: '#1e293b',
    borderRadius: '1rem',
    padding: '1.5rem',
    border: '1px solid #334155',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
    marginTop: '1rem',
  },
  statItem: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#0f172a',
    borderRadius: '0.75rem',
  },
  statNumero: {
    display: 'block',
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  statLabel: {
    fontSize: '0.875rem',
    color: '#94a3b8',
  },
  dicasGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  dicaCard: {
    backgroundColor: '#1e293b',
    borderRadius: '1rem',
    padding: '1.5rem',
    border: '1px solid #334155',
  },
  dicaIcone: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    display: 'block',
  },
  dicaTitulo: {
    margin: '0 0 0.5rem 0',
    color: '#f8fafc',
  },
  dicaTexto: {
    color: '#94a3b8',
    margin: 0,
    fontSize: '0.9rem',
  },
  alertaBox: {
    backgroundColor: '#7f1d1d',
    borderRadius: '1rem',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    border: '1px solid #991b1b',
  },
  alertaTitulo: {
    margin: '0 0 0.75rem 0',
    color: '#fca5a5',
  },
  alertaTexto: {
    color: '#fecaca',
    margin: 0,
    lineHeight: 1.6,
  },
  linkBox: {
    backgroundColor: '#1e293b',
    borderRadius: '1rem',
    padding: '1.5rem',
    border: '1px solid #334155',
  },
  linkLista: {
    color: '#60a5fa',
    paddingLeft: '1.5rem',
    margin: '0.5rem 0 0 0',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#1e293b',
    borderRadius: '1rem',
    padding: '2rem',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative',
    border: '1px solid #334155',
  },
  fecharModal: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  modalIcone: {
    fontSize: '4rem',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  modalTitulo: {
    margin: '0 0 0.5rem 0',
    textAlign: 'center',
    color: '#f8fafc',
  },
  modalCategoria: {
    display: 'block',
    textAlign: 'center',
    color: '#60a5fa',
    marginBottom: '1.5rem',
  },
  modalInfo: {
    backgroundColor: '#0f172a',
    borderRadius: '0.75rem',
    padding: '1rem',
    marginBottom: '1rem',
  },
  modalInfoItem: {
    marginBottom: '0.5rem',
    color: '#cbd5e1',
  },
  modalSecao: {
    marginTop: '1rem',
  },
  footer: {
    textAlign: 'center',
    padding: '2rem',
    color: '#64748b',
    borderTop: '1px solid #334155',
    fontSize: '0.875rem',
  },
};

export default App;