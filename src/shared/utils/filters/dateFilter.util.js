import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatDateWithMonthLiteral = (dateString) => {
  return format(
    parseISO(dateString),
    "dd 'de' MMM 'de' yyyy",
    { locale: ptBR }
  );
}
