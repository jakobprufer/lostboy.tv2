import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {ProjectsIcon} from '@sanity/icons'

export const deskStructure = (S, context) => {
    return S.list()
      .title('Content')
      .items([
        // Minimum required configuration
        orderableDocumentListDeskItem({id: '0', type: 'project', title: 'Featured Work', icon: ProjectsIcon, S, context}),
        ...S.documentTypeListItems().filter(listItem => !['project'].includes(listItem.getId()))
      ])
    }