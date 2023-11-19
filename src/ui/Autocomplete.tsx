import { useCombobox } from "downshift";
import { TextField } from "./text-field";
import styled from "styled-components";
import { primary, primaryLighter2 } from "./colors";
import { AnimatePresence, motion } from "framer-motion";

export const Autocomplete = ({
  data = [],
  setInputValue,
  handleSelectItem,
}: any) => {
  const { isOpen, getMenuProps, getInputProps, getItemProps } = useCombobox({
    onInputValueChange({ inputValue }) {
      setInputValue(inputValue);
    },
    onSelectedItemChange({ selectedItem }) {
      handleSelectItem(selectedItem);
    },
    items: data,
    itemToString(item: any) {
      return item ? item.name || item : "";
    },
  });

  return (
    <Wrapper>
      <TextField placeHolder={"Project name"} {...getInputProps()} />
      <AnimatePresence>
        {isOpen && (
          <List
            {...getMenuProps()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
          >
            {(data || [])?.map((item: any, index: number) => (
              <ListItem key={item.id} {...getItemProps({ item, index })}>
                <span>{item.name || item}</span>
              </ListItem>
            ))}
          </List>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const List = styled(motion.ul)`
  position: absolute;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
  width: 100%;
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
  &::-webkit-scrollbar-track {
    background-color: #ccc;
  }
  &::-webkit-scrollbar-button {
    background-color: #ccc;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: ${primary};
  }

  background-color: white;
  max-height: 150px;
  overflow-y: scroll;
  z-index: 2;
`;

const ListItem = styled.li`
  margin-top: 10px;
  padding: 4px;
  padding-left: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${primaryLighter2};
  }
`;
