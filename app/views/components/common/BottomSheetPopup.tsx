import React, { forwardRef, useCallback, useMemo } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { StyleSheet, View } from "react-native";

interface Props {
  children: React.ReactNode;
}

type Ref = BottomSheet;

export const BottomSheetPopup = forwardRef<Ref, Props>(({ children }, ref) => {
  const snapPoints = useMemo(() => ["70%"], []);

  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
    return (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    );
  }, []);

  return (
    <BottomSheet
      ref={ref}
      snapPoints={snapPoints}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      style={styles.container}
    >
      <View>{children}</View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
