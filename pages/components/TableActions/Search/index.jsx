import { Input, InputGroup} from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';

export default function Search({placeholder,onSearch, onChange, search}) {

  function handleEnter(e){
    if(e.key === 'Enter'){
      onSearch()
    }
  }

  return (
    <InputGroup size='md' inside>
    <Input placeholder={placeholder} value={search} onChange={onChange} onKeyDown={handleEnter} />
    <InputGroup.Button onClick={onSearch}>
      <SearchIcon />
    </InputGroup.Button>
  </InputGroup>
  )
}
