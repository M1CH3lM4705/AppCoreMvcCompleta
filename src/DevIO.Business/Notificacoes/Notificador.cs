using DevIO.Business.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace DevIO.Business.Notificacoes
{
    public class Notificador : INotificador
    {
        private List<Notificacao> _notficacoes;

        public Notificador()
        {
            _notficacoes = new List<Notificacao>();
        }

        public void Handle(Notificacao notificacao)
        {
            _notficacoes.Add(notificacao);
        }

        public List<Notificacao> ObterNotificacoes()
        {
            return _notficacoes;
        }

        public bool TemNotificacao()
        {
            return _notficacoes.Any();
        }
    }
}
