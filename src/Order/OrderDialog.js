import React from 'react';
import { Dialog, DialogContent, DialogShadow, DialogFooter, ConfirmButton } from "../FoodDialog/FoodDialog";

export function OrderDialog() {
    return <>
      <DialogShadow />
      <Dialog>
          <DialogContent>
              <h2> Your order is on the way! </h2>
          </DialogContent>
          <DialogFooter>
              <ConfirmButton>
                  I'm still hungry
              </ConfirmButton>
          </DialogFooter>
      </Dialog>    
    </>
}