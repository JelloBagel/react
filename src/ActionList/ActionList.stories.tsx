import React from 'react'
import {Story, Meta} from '@storybook/react'
import {ActionList, ActionListProps} from '.'
import {Item} from './Item'
import {LinkItem} from './LinkItem'
import {Heading, ActionListHeadingProps} from './Heading'
import {Divider} from './Divider'
import {Description} from './Description'
import {TypographyIcon, VersionsIcon, SearchIcon, ArrowRightIcon, ArrowLeftIcon} from '@primer/octicons-react'

export default {
  title: 'Components/ActionList',
  component: ActionList,
  subcomponents: {Item, LinkItem, Heading, Divider, Description},
} as Meta<typeof ActionList>

export const Default = () => (
  <ActionList>
    <ActionList.Item>Copy link</ActionList.Item>
    <ActionList.Item>Quote reply</ActionList.Item>
    <ActionList.Item>Edit comment</ActionList.Item>
  </ActionList>
)

export const Playground: Story<ActionListProps> = args => (
  <ActionList {...args}>
    <ActionList.Item>Copy link</ActionList.Item>
    <ActionList.Item>Quote reply</ActionList.Item>
    <ActionList.Item>Edit comment</ActionList.Item>
  </ActionList>
)
Playground.args = {
  showDividers: false,
  selectionVariant: undefined,
  variant: 'inset',
  role: 'list',
}
Playground.argTypes = {
  showDividers: {
    control: {
      type: 'boolean',
    },
  },
  variant: {
    control: {
      type: 'radio',
    },
    options: ['inset', 'full'],
  },
  selectionVariant: {
    control: {
      type: 'radio',
      labels: ['single', 'multiple', 'unset'],
    },
    options: [0, 1, 2],
    mapping: ['single', 'multiple', null],
  },
  role: {
    type: 'string',
  },
}

const icons = ['unset', 'TypographyIcon', 'VersionsIcon', 'SearchIcon', 'ArrowRightIcon', 'ArrowLeftIcon']

// @ts-ignore ignoring types here to pass in options for icon selection in Storybook
export const ItemPlayground = args => {
  let leadingVisual
  if (args.leadingVisual === 'TypographyIcon') {
    leadingVisual = <TypographyIcon />
  } else if (args.leadingVisual === 'VersionsIcon') {
    leadingVisual = <VersionsIcon />
  } else if (args.leadingVisual === 'SearchIcon') {
    leadingVisual = <SearchIcon />
  } else if (args.leadingVisual === 'ArrowRightIcon') {
    leadingVisual = <ArrowRightIcon />
  } else if (args.leadingVisual === 'ArrowLeftIcon') {
    leadingVisual = <ArrowLeftIcon />
  } else if (args.leadingVisual === 'unset') {
    leadingVisual = null
  }

  let trailingVisual
  if (args.trailingVisual === 'TypographyIcon') {
    trailingVisual = <TypographyIcon />
  } else if (args.trailingVisual === 'VersionsIcon') {
    trailingVisual = <VersionsIcon />
  } else if (args.trailingVisual === 'SearchIcon') {
    trailingVisual = <SearchIcon />
  } else if (args.trailingVisual === 'ArrowRightIcon') {
    trailingVisual = <ArrowRightIcon />
  } else if (args.trailingVisual === 'ArrowLeftIcon') {
    trailingVisual = <ArrowLeftIcon />
  } else if (args.trailingVisual === 'unset') {
    trailingVisual = null
  }

  return (
    <ActionList selectionVariant={args.selectionVariant}>
      <ActionList.Item {...args}>
        {leadingVisual && <ActionList.LeadingVisual>{leadingVisual}</ActionList.LeadingVisual>}
        Action list item
        {trailingVisual && <ActionList.TrailingVisual>{trailingVisual}</ActionList.TrailingVisual>}
      </ActionList.Item>
    </ActionList>
  )
}
ItemPlayground.argTypes = {
  selected: {
    control: {
      type: 'boolean',
    },
  },
  active: {
    control: {
      type: 'boolean',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  variant: {
    control: 'radio',
    options: ['default', 'danger'],
  },
  role: {
    type: 'string',
  },
  id: {
    type: 'string',
  },
  leadingVisual: {
    control: {
      type: 'select',
    },
    options: icons,
  },
  trailingVisual: {
    control: {
      type: 'select',
    },
    options: icons,
  },
  selectionVariant: {
    control: 'radio',
    if: {arg: 'selected'},
    options: ['single', 'multiple'],
    table: {
      category: 'ActionList',
    },
  },
}
ItemPlayground.args = {
  selected: false,
  active: false,
  disabled: false,
  variant: 'default',
  role: 'listitem',
  id: 'item-1',
  leadingVisual: null,
  trailingVisual: null,
  selectionVariant: 'single',
}

// @ts-ignore ignoring types here to pass in options for icon selection in Storybook
export const LinkItemPlayground = args => {
  let leadingVisual
  if (args.leadingVisual === 'TypographyIcon') {
    leadingVisual = <TypographyIcon />
  } else if (args.leadingVisual === 'VersionsIcon') {
    leadingVisual = <VersionsIcon />
  } else if (args.leadingVisual === 'SearchIcon') {
    leadingVisual = <SearchIcon />
  } else if (args.leadingVisual === 'ArrowRightIcon') {
    leadingVisual = <ArrowRightIcon />
  } else if (args.leadingVisual === 'ArrowLeftIcon') {
    leadingVisual = <ArrowLeftIcon />
  } else if (args.leadingVisual === 'unset') {
    leadingVisual = null
  }

  let trailingVisual
  if (args.trailingVisual === 'TypographyIcon') {
    trailingVisual = <TypographyIcon />
  } else if (args.trailingVisual === 'VersionsIcon') {
    trailingVisual = <VersionsIcon />
  } else if (args.trailingVisual === 'SearchIcon') {
    trailingVisual = <SearchIcon />
  } else if (args.trailingVisual === 'ArrowRightIcon') {
    trailingVisual = <ArrowRightIcon />
  } else if (args.trailingVisual === 'ArrowLeftIcon') {
    trailingVisual = <ArrowLeftIcon />
  } else if (args.trailingVisual === 'unset') {
    trailingVisual = null
  }

  return (
    <ActionList>
      <ActionList.LinkItem {...args}>
        {leadingVisual && <ActionList.LeadingVisual>{leadingVisual}</ActionList.LeadingVisual>}
        Action list item
        {trailingVisual && <ActionList.TrailingVisual>{trailingVisual}</ActionList.TrailingVisual>}
      </ActionList.LinkItem>
    </ActionList>
  )
}
LinkItemPlayground.args = {
  active: false,
  disabled: false,
  role: 'listitem',
  id: 'item-1',
  leadingVisual: null,
  trailingVisual: null,
}
LinkItemPlayground.argTypes = {
  active: {
    control: {
      type: 'boolean',
    },
  },
  role: {
    type: 'string',
  },
  id: {
    type: 'string',
  },
  leadingVisual: {
    control: {
      type: 'select',
    },
    options: icons,
  },
  trailingVisual: {
    control: {
      type: 'select',
    },
    options: icons,
  },
  href: {
    type: 'string',
  },
}

export const HeadingPlayground: Story<ActionListProps & ActionListHeadingProps> = args => (
  <ActionList>
    <ActionList.Heading title={args.title} subtitle={args.subtitle} variant={args.variant} as={args.as} />
  </ActionList>
)

HeadingPlayground.args = {
  title: 'Group title',
}

HeadingPlayground.argTypes = {
  variant: {
    type: 'string',
    control: {
      type: 'radio',
    },
    options: ['subtle', 'filled'],
  },
  title: {
    type: 'string',
  },
  subtitle: {
    type: 'string',
  },
  as: {
    control: {
      type: 'radio',
    },
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  },
}
